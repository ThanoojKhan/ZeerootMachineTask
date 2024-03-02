import React from 'react';

function Loader() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="animate-spin rounded-full h-14 w-14 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}

export default Loader;
