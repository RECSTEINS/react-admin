import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colums = [ {field: "id", hearderName: "ID"},
                     {field: "name", hearderName: "Nombre", flex: 1, cellClassName: "name-column-cell"},
                     {field: "age", hearderName: "Edad", type: "number", headerAlign: "left", align: "left"},
                     {field: "phone", hearderName: "Celular", flex: 1},
                     {field: "email", hearderName: "Correo", flex: 1},
                     {field: "access", hearderName: "", flex: 1},
    ]

    return(
        <Box>
            <Header title="TEAM" subtitle="Administra a los miembros del equipo"/>
            <Box>
                <DataGrid
                    rows={mockDataTeam}
                    columns={colums}
                />
            </Box>
        </Box>
    )
}

export default Team;