export const toCapitalize = (string:string = '') => {
    return string?.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match?.toUpperCase())
}
