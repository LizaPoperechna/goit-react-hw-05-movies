import { GoBackButton } from "./ButtonGoBack.styled";
import { HiArrowLeft } from "react-icons/hi";

export const ButtonGoBack = ({to, children}) => {
    return (
        <GoBackButton to={to}>
            <HiArrowLeft size='14'/>
            {children}
        </GoBackButton>
    )
}

