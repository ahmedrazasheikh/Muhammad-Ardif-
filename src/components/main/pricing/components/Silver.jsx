import {
    PriceCardSilver,
    TitleCard,
    AdvantagesWrapperSilver,
    PriceAdvantages,
    TextAdvantages,
    Price,
    MainPriceText,
    DiscountPriceWrapper,
    DiscountPrice,
    DiscountPriceDercr,
    SignupButton,
} from '../styles/Silver.styled';
import priceMark from 'images/header/priceMark.svg';
import linestright from 'images/header/linestright.jpg';


export const Silver = ({ handleClick }) => {
    return (
        <PriceCardSilver>
            <AdvantagesWrapperSilver>
                <TitleCard>SILVER</TitleCard>
                <Price>
                    <div className="mainPrice">
                        <MainPriceText>$575/mo.</MainPriceText>
                    </div>
                    <DiscountPriceWrapper>
                        <DiscountPrice className="price">$499/mo</DiscountPrice>
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
                        Access to all GCF and DFC focused Grading Tools.
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Upgraded AI model “Davinci” for higher quality, and
                        longer outputs. (2x “Curie” model)
                    </TextAdvantages>
                </PriceAdvantages>
                <PriceAdvantages>
                    <img
                        src={priceMark}
                        alt="pricemark"
                        style={{ marginRight: 8 }}
                    />
                    <TextAdvantages>
                        Enough data for grading five full proposal. (up to three
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
                        Near unlimited use of Climate Rationale, Project
                        Structuring AND research tools.
                    </TextAdvantages>
                </PriceAdvantages>
            </AdvantagesWrapperSilver>

            <div style={{ textAlign: 'center' }}>
                <SignupButton disabled onClick={()=>handleClick('Silver')}>
                Coming soon
                </SignupButton>
            </div>
        </PriceCardSilver>
    );
};
