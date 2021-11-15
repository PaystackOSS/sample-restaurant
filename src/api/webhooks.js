const Pusher = require("pusher");

export default async function webhooks(req, res) {
  res.send(200)

  const pusher = new Pusher({
    appId: process.env.GATSBY_PUSHER_APP_ID,
    key: process.env.GATSBY_PUSHER_KEY,
    secret: process.env.GATSBY_PUSHER_SECRET,
    cluster: "eu",
    useTLS: true
  });
  
  pusher.trigger("my-channel", "my-event", req.body);
}