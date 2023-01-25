export interface SiteFormModel {
    _id: string,
    name: string,
    path: string,
    publicPath: string,
    key: string,
    description: string
  }

export const  createEmptySiteForm= (): SiteFormModel => ({
    _id: "",
    name: "",
    path: "",
    publicPath: "",
    key: "",
    description: ""
  })