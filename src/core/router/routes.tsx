interface SwitchRoutes {
        root: string;
        sites: string;
        site: string;
        create: string;
        edit:string;
        delete:string;
    
      }
      
    export const SwitchRoutes: SwitchRoutes = {
        root: '/',
        sites: '/sistes',
        site: '/site/:id',
        create: '/create-site/',
        edit: '/edit-site/:id',
        delete: '/delete-site/:id'
      };
  