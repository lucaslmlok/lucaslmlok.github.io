export const loadScriptByURL = (
    id: string,
    url: string,
    callback: Function
) => {
    const isScriptExist = document.getElementById(id);

    if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
            if (callback) callback();
        };
        document.body.appendChild(script);
    }

    if (isScriptExist && callback) callback();
};
