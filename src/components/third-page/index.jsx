import { PhotoDiv, ThirdPagePart, ThirdPagePartCalendar } from "./styled"
import { Container } from "../../GlobalStyle"



export const ThirdPage = () => {
    return (
        <ThirdPagePart className="relative">
            <Container>
                <ThirdPagePartCalendar data-aos="fade-in" className="text-[36px]">
                    {[...Array(35)].map((_, i) =>
                        i > 1 && i <= 32 ? <div className={i - 1 == 16 ? "special" : ""}>{i - 1}</div> : <div></div>
                    )}
                </ThirdPagePartCalendar>
            </Container>
        </ThirdPagePart>
    )
}