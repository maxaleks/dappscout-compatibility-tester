import React, { useState, useEffect } from 'react';

const IFRAME_SANDBOX_ATTRIBUTE = 'allow-forms allow-orientation-lock ' +
'allow-pointer-lock allow-popups-to-escape-sandbox ' +
'allow-same-origin allow-scripts ' +
'allow-top-navigation-by-user-activation allow-popups';
const IFRAME_ALLOW_ATTRIBUTE = 'clipboard-read; clipboard-write;';

const SECOND = 1000;

export default function MainRoute() {
  const [inputData, setInputData] = useState('');
  const [outputData, setOutputData] = useState('');
  const [isTesting, setIsTesting] = useState(false);
  const [batchSize, setBatchSize] = useState(1);
  const [batchTimeout, setBatchTimeout] = useState(5);

  useEffect(() => {
    setOutputData('');
  }, [inputData]);

  const test = async () => {
    setIsTesting(true);

    try {
      const apps = JSON.parse(inputData).map(app => ({ ...app, internalWallet: false }));

      const handleEvent = (event) => {
        if (event.data.method === 'getSafeInfo') {
          const iframes = Array.from(document.querySelectorAll('iframe'));
          const iframe = iframes.find(i => i.contentWindow === event.source);
          if (iframe) {
            const index = apps.findIndex(app => app.id === iframe.id);
            apps[index].internalWallet = true;
            iframe.remove();
          }
        }
      }

      window.addEventListener('message', handleEvent);

      async function processBatch(batch) {
        return Promise.all(batch.map(app =>
          new Promise(resolve => {
            const iframe = document.createElement('iframe');
            iframe.id = app.id;
            iframe.src = app.url;
            iframe.sandbox = IFRAME_SANDBOX_ATTRIBUTE;
            iframe.allow = IFRAME_ALLOW_ATTRIBUTE;
            document.body.appendChild(iframe);
            setTimeout(() => {
              iframe.remove();
              resolve();
            }, batchTimeout * SECOND);
          })
        ));
      }

      for (let i = 0; i < apps.length; i += batchSize) {
        const batch = apps.slice(i, i + batchSize);
        await processBatch(batch);
      }

      setOutputData(JSON.stringify(apps, null, "  "));

      window.removeEventListener('message', handleEvent);
    } catch (e) {
      alert(e.message);
    }
    setIsTesting(false);
  }

  return (
    <div className="container">
      <div className="row flex-start margin-bottom margin-top">
        <div className="row">
          <span>Batch size:</span>
          <input type="number" value={batchSize} onChange={e => setBatchSize(Number(e.target.value))} />
        </div>
        <div className="row">
          <span>Batch timeout (seconds):</span>
          <input type="number" value={batchTimeout} onChange={e => setBatchTimeout(Number(e.target.value))} />
        </div>
      </div>
      <div className="row">
        <div className="column">
          <span>Enter the list of dApps:</span>
          <textarea value={inputData} onChange={e => setInputData(e.target.value)} />
        </div>
        <button onClick={test} disabled={isTesting}>Test</button>
        <div className="column">
          <span>Results:</span>
          <textarea value={isTesting ? 'Testing...' : outputData} readOnly />
        </div>
      </div>
    </div>
  )
}
