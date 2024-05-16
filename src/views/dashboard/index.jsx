import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
    return<Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="Dashboard" subtitle="Bienvenido a tu dashboard"/>
        </Box>
    </Box>
}

export default Dashboard;