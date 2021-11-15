import fetch from "node-fetch"

export default async function createInvoice(req, res) {
  const url = `${process.env.GATSBY_BASE_API}/paymentrequest`
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.GATSBY_AUTH_KEY}`
  }

  const data = req.body

  try {
    await fetch(url, {
      method: "POST",
      headers: headers,
      body: data,
    })
      .then(response => response.json())
      .then(data => res.status(200).send(data))
      .catch(error => res.status(500).send(error))
  } catch (error) {
    console.log("Error: ", error)
    res.status(500).send(error)
  }


}