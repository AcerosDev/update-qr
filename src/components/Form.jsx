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
import CircularProgress from '@mui/material/CircularProgress';
import Alerts from './Alert';

function Form() {
    const [usoCfdi, setUsoCfdi] = useState("");
    const [loading, setLoading] = useState(false);
    const [hidden, setHidden] = useState(true);
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState();
    const [severity, setSeverity] = useState();
    const [message, setMessage] = useState("");
    const [openAlert, setOpenAlert] = useState(false)

    const handleChange = ({ target }) => {
        setUsoCfdi(target.value);
    };

    const handleSubmit = () => {
        setMessage("Datos actualizados con éxito")
        setOpenAlert(true)
        setLoading(false)
        setHidden(true)
        setSeverity("success")
    }

    const fileChange = ({ target }) => {
        setLoading(true);

        if (target.files[0]?.name) {
            setFileName(target.files[0]?.name);
            setFile(target.files[0]);

            const formData = new FormData();
            formData.append("nameFile", target.files[0]?.name);
            formData.append("usocfdi", usoCfdi);
            formData.append("address", "fiscal");
            formData.append("file", target.files[0]);

            // eslint-disable-next-line no-unused-expressions
            target.files[0].type === "application/pdf"
                ? target.files[0].size <= 512000
                    ? (
                        setHidden(false),
                        setOpenAlert(false),
                        setLoading(false)
                    )
                    : (
                        setMessage("Peso excedido (Máx. 500 kB)"),
                        setOpenAlert(true),
                        setLoading(false),
                        setHidden(true),
                        setSeverity("error")
                    )
                : (
                    setMessage("Seleccione un archivo PDF"),
                    setOpenAlert(true),
                    setLoading(false),
                    setHidden(true),
                    setSeverity("error")
                )
        } else {
            // eslint-disable-next-line no-unused-expressions
            setMessage("Seleccione un archivo")
            setOpenAlert(true)
            setLoading(false)
            setHidden(true)
            setSeverity("error")
        }
    }

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
                >
                    <Typography variant="h6" component="h1">
                        Actualización de datos fiscales
                    </Typography>
                    <Divider sx={{ my: 1 }} />

                    <Button
                        variant="contained"
                        startIcon={<AttachFileIcon />}
                        color="secondary"
                        component="label"
                        sx={{ mb: 2 }}
                    >
                        <label htmlFor="file">
                            {fileName ? fileName : "Seleccionar archivo"}
                        </label>
                        <input
                            hidden
                            accept="application/pdf"
                            id="file"
                            type="file"
                            onChange={fileChange}
                        />
                    </Button>
                    {
                        loading && hidden && (
                            <>
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                            </>
                        )
                    }

                    {
                        !hidden && (
                            <>
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
                                            value="UNIVERSIDAD PARA LA
                                              COOPERACION INTERNACIONAL"
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
                                            value="Régimen General de Ley Personas Morales"
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
                                            value="77539"
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
                                            value="CANCUN"
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
                                            value="QUINTANA ROO"
                                            disabled
                                        />
                                    </FormControl>
                                </Box>

                                <Box sx={{ display: "flex", alignItems: "flex-end", mb: 1 }}>
                                    <FormControl fullWidth>
                                        <Button
                                            variant='contained'
                                            onClick={handleSubmit}
                                        >
                                            ACEPTAR
                                        </Button>
                                    </FormControl>
                                </Box>
                            </>
                        )
                    }

                    {
                        openAlert && (
                            <Alerts
                                severity={severity}
                                message={message}
                            />
                        )
                    }

                </Paper>
            </Container>
        </>
    )
}

export default Form