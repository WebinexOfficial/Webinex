import React, { useState } from 'react';
import WebsiteForm from './components/WebsiteForm';
import { downloadZipMultiPage } from './components/Exporter';
import Preview from './components/Preview';

function WebSiteBuilder() {
  const [pages, setPages] = useState(null);

  const handleGenerate = (htmlPages) => {
    setPages(htmlPages);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black flex flex-col">

      <main className="flex-1 flex flex-col items-center justify-start w-full px-4">
        <div className="w-full max-w-5xl">
          <WebsiteForm onGenerate={handleGenerate} />
        </div>

        {pages && (
          <div className="w-full flex flex-col items-center mt-12">
            <button
              onClick={() => downloadZipMultiPage(pages)}
              className="px-8 py-4 bg-[#00ff99] text-black rounded-xl shadow-lg font-bold text-lg hover:bg-[#00e68c] transition-all"
            >
              📦 Download ZIP
            </button>

            <div className="w-full max-w-6xl mt-12 bg-black rounded-2xl shadow-2xl p-6">
              <h2 className="text-2xl font-bold text-[#00ff99] mb-6 text-center">Live Preview</h2>
              <Preview html={pages['index.html']} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default WebSiteBuilder;