import _ from "lodash";
import axios from "axios";
import moment from "moment";

/**
 * 获取一个 json 文件
 * @param {String} uri 资源url
 */
export function getJsonFile(uri: string) {
  return axios.get(uri).then((v) => {
    const xml = v.request;
    let ret;
    try {
      ret = JSON.parse(xml.responseText);
    } catch (e) {
      throw new Error(`uri: ${uri}, JSON 文件解析失败，请检查该Json文件格式`);
    }
    return ret;
  });
}

export default {
  getJsonFile,
};
