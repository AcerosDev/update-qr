import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from "@mui/material/Divider";


function Form() {
    const [usoCfdi, setUsoCfdi] = useState("");

    const handleChange = (event) => {
        setUsoCfdi(event.target.value);
    };

    return (
        <>
                <Container
                    component="main"
                    maxWidth="sm"
                    sx={{ pt: 10 }}
                >
                    <Paper
                        elevation={3}
                        sx={{ p: 3 }}
                        variant="outlined"
                    >
                        <Typography variant="h6" component="h1">
                            Alta/Actualización de datos fiscales
                        </Typography>
                        <Divider sx={{ my: 1 }} />

                        <Button
                            variant="contained"
                            startIcon={<AttachFileIcon />}
                            color="secondary"
                            component="label"
                            sx={{ mb: 2 }}
                        >
                            Seleccionar archivo
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">
                                    Uso CFDI
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={usoCfdi}
                                    label="Uso CFDI"
                                    onChange={handleChange}
                                    required
                                >
                                    <MenuItem value="">
                                        Seleccione una opción
                                    </MenuItem>
                                    <MenuItem value={"G01"}>
                                        Adquisición de mercancías
                                    </MenuItem>
                                    <MenuItem value={"G03"}>Gastos en general</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Correo"
                                    type="email"
                                    color="primary"
                                    name="email"
                                    size='small'
                                // value={dataClient.email}
                                // onChange={handleDataCliente}
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Teléfono"
                                    type="tel"
                                    color="primary"
                                    name="tel"
                                    size='small'
                                // value={dataClient.tel}
                                // onChange={handleDataCliente}
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Razón Social"
                                    type="text"
                                    color="primary"
                                    //   value={data.razonSocial}
                                    size='small'
                                    disabled
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Régimen Fiscal"
                                    type="text"
                                    color="primary"
                                    //   value={data.regimenFiscal}
                                    size='small'
                                    disabled
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Código Postal"
                                    type="text"
                                    color="primary"
                                    //   value={data.codigoPostal}
                                    size='small'
                                    disabled
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Ciudad"
                                    type="text"
                                    color="primary"
                                    //   value={data.city}
                                    size='small'
                                    disabled
                                />
                            </FormControl>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Estado"
                                    type="text"
                                    color="primary"
                                    size='small'
                                    //   value={data.entidadFederativa}
                                    disabled
                                />
                            </FormControl>
                        </Box>

                    </Paper>
                </Container>
        </>
    )
}

export default Form