import React from 'react';


function LessonVideo({ url }) {
  return (
    <div>
      <iframe
        title="lesson-video"
        width="560"
        height="315"
        src={url}
        frameborder="0"
        allowfullscreen
      />
    </div>
  );
}

export default LessonVideo;
