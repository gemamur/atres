export interface SiteModel {
    _id: string,
    name: string,
    path: string,
    description: string
  }

  export const createEmptySite = (): SiteModel => ({
    _id: "",
    name: "",
    path: "",
    description: ""
  })