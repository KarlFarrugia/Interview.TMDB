import Font from "./Font";
  
const InputStyle = {
    disabled: {
        "&:before": {
        borderColor: "transparent !important"
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
        borderColor: "#D2D2D2 !important",
        borderWidth: "1px !important"
        },
        "&:after": {
        borderColor: "#59731c"
        }
    },
    labelRoot: {
        ...Font,
        color: "#3C4858",
        fontWeight: "400",
        fontSize: "1em",
        lineHeight: "1.42857",
        top: "10px",
        "& + $underline": {
        marginTop: "0px"
        }
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
        backgroundColor: "#FFF"
        },
        "&:after": {
        backgroundColor: "#FFF"
        }
    },
    input: {
        color: "#505050",
        "&,&::placeholder": {
        paddingTop: "0px !important",
        fontSize: "1em",
        fontFamily: '"Lato", "Helvetica", "Arial", sans-serif !important',
        fontWeight: "400",
        lineHeight: "1.42857",
        opacity: "1"
        },
        "&::placeholder": {
        color: "#3C4858"
        }
    },
    whiteInput: {
        "&,&::placeholder": {
        color: "#FFF",
        opacity: "1"
        }
    }
};

export default InputStyle;
  