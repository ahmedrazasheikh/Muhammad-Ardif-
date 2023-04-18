import {
    PriceCardBronze,
    TitleCard,
    AdvantagesWrapperBronze,
    PriceAdvantages,
    TextAdvantages,
    Price,
    MainPriceText,
    DiscountPriceWrapper,
    DiscountPrice,
    DiscountPriceDercr,
    SignupButton,
} from '../styles/Bronze.styled';
import priceMark from 'images/header/priceMark.svg';
import linestright from 'images/header/linestright.jpg';

export const Bronze = ({ handleClick }) => {
    return (
        <PriceCardBronze>
            <AdvantagesWrapperBronze>
                <TitleCard>BRONZE</TitleCard>
                <Price>
                    <div className="mainPrice">
                        <MainPriceText>$375/mo.</MainPriceText>
                    </div>
                    <DiscountPriceWrapper>
                        <DiscountPrice className="price">$299/mo</DiscountPrice>
                        <DiscountPriceDercr className="discrPrice">
                            per license with AutoPay
                        </DiscountPriceDercr>
                    </DiscountPriceWrapper>
                </Price>
                <img
                    src={linestright}
                    alt="linestright"
                    style={{ marginBottom: 15 }}
                />
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Access to all GCF focused Grading Tools.
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Default AI model “Curie” for excellent outputs but
                        limited length response outputs.
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Enough data for grading one full proposal. (up to three
                        revisions)
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Full use of Climate Rationale OR Project Structuring
                        function.
                    </TextAdvantages>
                </PriceAdvantages>
            </AdvantagesWrapperBronze>

            <div style={{ textAlign: 'center' }}>
                <SignupButton onClick={()=>handleClick("Bronze")}>
                    Sign up
                </SignupButton>
            </div>
        </PriceCardBronze>
    );
};
