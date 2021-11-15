import fetch from "node-fetch"

export default async function pushToTerminal(req, res) {
  const url = `${process.env.GATSBY_BASE_API}/terminal/${process.env.GATSBY_TERMINAL_ID}/event`
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GATSBY_AUTH_KEY}`
  }

  const {id, offline_reference} = JSON.parse(req.body)

  const data = { 
    type: "invoice",
    action: "process",
    data: {
      id: id,
      reference: offline_reference
    }
  }

  try {
    await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => res.status(200).send(data))
      .catch(error => res.status(500).send(error))
  } catch (error) {
    res.status(500).send(error)
  }
}