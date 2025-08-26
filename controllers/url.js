const {nanoid} = require('nanoid');

async function handleGenerateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"});
    const shortId = nanoid(8);
    await URL.createObjectURL({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],

    })
    return res.json({id: shortId});

}
moduke.exports = {handleGenerateShortUrl};