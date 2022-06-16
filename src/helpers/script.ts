// eslint-disable-next-line @typescript-eslint/ban-types
const loadScriptByURL = (id: string, url: string, callback: Function) => {
  const isScriptExist = document.getElementById(id);

  if (!isScriptExist) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.id = id;
    script.onload = () => {
      if (callback) callback();
    };
    document.body.appendChild(script);
  }

  if (isScriptExist && callback) callback();
};

export default loadScriptByURL;
