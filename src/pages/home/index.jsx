import { Box, Button, CardContent, Typography } from "@mui/material";
import CustomCard from "../../components/CustomCard";
import { Link } from "react-router-dom";
import transition from "../../transition";

const Home = () => {
    return (
 
            <Box sx={{ width: "100%", height: "100vh" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <Box>
                        <Typography textAlign="center" fontFamily="inherit" variant="h5" color="white" sx={{ textShadow: "5px 3px black", my: 3, userSelect: "none" }}>
                            Đây là một trang web nhỏ giúp mọi người chia sẻ với nhau những câu chuyện trong một năm vừa qua. <br />
                            Cũng như điều ước và mong muốn của bản thân cho tương lai sắp tới. <br />
                            Mọi chia sẻ và câu chuyện của bạn đều được ẩn danh nên bạn không cần lo gì cả. <br />
                            <br />
                            Nhân tiện thì nếu bạn có nghe thấy tiếng mèo kêu hay gì đó thì đó là âm thanh tới từ trang web nhá.
                            <br />
                            <br />
                            Chúc bạn một ngày tốt lành!
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                            <CustomCard>
                                <CardContent sx={{ display: "flex", justifyContent: "center", p: 0, pb: "0 !important"}}>
                                    <Button component={Link} to="/edit" sx={{ color: "black !important", fontFamily: "inherit", p: 2 }}>
                                        Viết chia sẻ của chính mình
                                    </Button>
                                </CardContent>
                            </CustomCard>
                        </Box>

                    </Box>
                </Box>
            </Box>
    );
}

export default transition(Home);