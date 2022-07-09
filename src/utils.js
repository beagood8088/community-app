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