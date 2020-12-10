const channel = new BroadcastChannel('main');

channel.onmessage = function(e) {
  console.log(e.data.detail.message);
};
