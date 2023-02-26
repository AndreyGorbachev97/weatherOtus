export function templateEngine(tpl, data) {
  let temp = tpl;
  temp = temp.replace(
    /\{\{for (\w+)}}(.+?)\{\{endfor\}}/g,
    (match, itemsKey, subTemplate) => {
      let res = "";
      if (itemsKey in data) {
        for (let i = 0; i < data[itemsKey].length; i += 1) {
          if (i !== data[itemsKey].length - 1) {
            const replaceSubTemplate = subTemplate.replace(
              /\{\{if lastIndex}}(.+?)\{\{endif\}}/g,
              ""
            );
            res += templateEngine(replaceSubTemplate, data[itemsKey][i]);
          } else {
            res += templateEngine(subTemplate, data[itemsKey][i]);
          }
        }
      }
      return res;
    }
  );

  temp = temp.replace(
    /\{\{if (\w+)}}(.+?)\{\{endif\}}/g,
    (match, itemsKey, subTemplate) => templateEngine(subTemplate, data)
  );

  temp = temp.replace(/\{\{(\w+)\}\}/g, (match, varName) =>
    data[varName] ? data[varName] : ""
  );
  return temp;
}
