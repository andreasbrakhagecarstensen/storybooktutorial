import React from "react";

export const storyDefaults = {
    decorators: [story=><div style={{padding: '3rem'}}>{story()}</div> ],
    excludeStories: /.*Data$/,
};

export default storyDefaults;