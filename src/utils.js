import moment from "moment"


export const convertMoment = (dateString) => {
  return moment(dateString)
}



export const isLess200MB = (file) => {
  if(!file) {
    alert('file is not exit')
    return false 
  }
  if (file.size/(1024*1024) > 200) {
    return false
  }
  return file.size/(1024*1024)
}



/** labels = [{label: "label one"}] 
 * return [{label: "label one", value: "LABEL_ONE"}]
*/
export const mapSelectOptionsFrom = (labels) => {
  return labels.map(opt => {
    return {
      label: opt.label,
      value: opt.label.replaceAll(" ", "_").toUpperCase()
    }
  })
}