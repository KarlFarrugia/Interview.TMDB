import Font from "./Font";
  
const SearchStyle = {
    SearchBox: {
        ...Font,
        position: "absolute",
        color: "#3C4858",
        backgroundColor: "#ff3",
        minHeight: "8vh",
        width: "98.5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "calc(10px + 2vmin)",
    },

    SearchBoxItem: {  
        backgroundColor: "#f3f",
    }
};

export default SearchStyle;