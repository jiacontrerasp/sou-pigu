//http://remysharp.com/2007/05/18/add-twitter-to-your-blog-step-by-step/
getTwitters('twitter', { 
  id: 'jiacontrerasp', 
  count: 1, 
  enableLinks: true, 
  ignoreReplies: true, 
  clearContents: true,
  template: '"%text%" <br /><a href="http://twitter.com/%user_screen_name%/statuses/%id%/">%time%</a>'
});
