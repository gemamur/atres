import React, { useEffect } from "react";
import { useFormik, Form, Field } from 'formik';
import { ValidationSchema } from "./validations/validationsSchema";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from "@mui/material/FormControl";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SiteFormModel } from "../siteForm.vm";


interface Props {
  site: SiteFormModel;
  onSave: (site: SiteFormModel) => void;
}

export const SiteForm: React.FunctionComponent<Props> = (props) => {

    const { site, onSave } = props;

    const formik = useFormik({
      initialValues: {
        _id: site._id,
        name: site.name,
        path: site.path,
        publicPath: site.publicPath,
        key: site.key,
        description: site.description
      },
      enableReinitialize:true,
      onSubmit: onSave,
      validationSchema: ValidationSchema,
      validateOnChange: false,
      validateOnBlur: true
    })
    
      return (
    
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                backgroundColor:"white",
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              
              <Typography component="h1" variant="h5">
                {site._id!='' ? "Actualizar sitio" : "Añadir nuevo sitio"}
              </Typography>
              
              <Box component="form" noValidate onSubmit={formik.handleSubmit}>
              <FormControl>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                  <TextField
                  name="name"
                  id="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  fullWidth
                  required
                  autoComplete="name"
                  error={Boolean(
                    formik.errors.name && formik.touched.name
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.name &&
                    formik.touched.name &&
                    String(formik.errors.name)
                  }
                />
                
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="path"
                      label="Path"
                      name="path"
                      autoComplete="path"
                      value={formik.values.path}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.errors.path && formik.touched.path
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.path &&
                    formik.touched.path &&
                    String(formik.errors.path)
                  }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="publicPath"
                      label="publicPath"
                      name="publicPath"
                      autoComplete="publicPath"
                      value={formik.values.publicPath}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.errors.publicPath && formik.touched.publicPath
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.publicPath &&
                    formik.touched.publicPath &&
                    String(formik.errors.publicPath)
                  }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="key"
                      label="Key"
                      id="key"
                      autoComplete="key"
                      value={formik.values.key}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.errors.key && formik.touched.key
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.key &&
                    formik.touched.key &&
                    String(formik.errors.key)
                  }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="description"
                      label="Description"
                      id="description"
                      autoComplete="description"
                      value={formik.values.description}
                  onChange={formik.handleChange}
                  error={Boolean(
                    formik.errors.description && formik.touched.description
                  )}
                  onBlur={formik.handleBlur}
                  helperText={
                    formik.errors.description &&
                    formik.touched.description &&
                    String(formik.errors.description)
                  }
                    />
                  </Grid>
                </Grid>
                </FormControl>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Guardar
                </Button>
              </Box>
              
            </Box>
          </Container>
      );
}