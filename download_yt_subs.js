async function getSubs(langCode = 'en') {
    let ct = JSON.parse((await (await fetch(window.location.href)).text()).split('ytInitialPlayerResponse = ')[1].split(';var')[0]).captions.playerCaptionsTracklistRenderer.captionTracks, findCaptionUrl = x => ct.find(y => y.vssId.indexOf(x) === 0)?.baseUrl, firstChoice = findCaptionUrl("." + langCode), url = firstChoice ? firstChoice + "&fmt=json3" : (findCaptionUrl(".") || findCaptionUrl("a." + langCode) || ct[0].baseUrl) + "&fmt=json3&tlang=" + langCode;
    return (await (await fetch(url)).json()).events.map(x => ({...x, text: x.segs?.map(x => x.utf8)?.join(" ")?.replace(/\n/g,' ')?.replace(/♪|'|"|\.{2,}|\<[\s\S]*?\>|\{[\s\S]*?\}|\[[\s\S]*?\]/g,'')?.trim() || ''}));
  }
  async function logSubs(langCode) {
    const subs = await getSubs(langCode);
    const text = subs.map(x => x.text).join('\n');
    console.log(text);
    return text;
  }
  async function downloadSubs(langCode) {
    const text = await logSubs(langCode);
    const blob = new Blob([text], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subs.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
  
  downloadSubs('en');