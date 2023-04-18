import {
    FeatureWrapper,
    FeatureBox,
    HeaderWrapper,
    FeatureTitle,
    FeatureText,
} from '../styles/Feature.styled';
import feature1 from 'images/header/feature1.svg';

export const Feature = () => {
    return (
        <FeatureWrapper>
            <FeatureBox>
                <div>
                    <HeaderWrapper>
                        <img src={feature1} alt="Feature" width={48} />
                        <FeatureTitle>Increase Productivity</FeatureTitle>
                    </HeaderWrapper>

                    <FeatureText>
                        Does what the introduction of the calculator did for
                        mathematics. It compresses the time necessary to
                        accomplish complex tasks resulting in much higher
                        productivity and time/cost savings.
                    </FeatureText>
                </div>
            </FeatureBox>
            <FeatureBox>
                <div>
                    <HeaderWrapper>
                        <img src={feature1} alt="Feature" width={48} />
                        <FeatureTitle>In-House Expertise </FeatureTitle>
                    </HeaderWrapper>
                    <FeatureText>
                        Imagine having instant access to hundreds of experts
                        representing all fields related to climate science and
                        funding to assist you with project structuring plans and
                        proposal crafting.
                    </FeatureText>
                </div>
            </FeatureBox>
            <FeatureBox>
                <div>
                    <HeaderWrapper>
                        <img src={feature1} alt="Feature" width={48} />
                        <FeatureTitle>Less Headaches</FeatureTitle>
                    </HeaderWrapper>
                    <FeatureText>
                        What if proposal research tasks, such as literature
                        review, information synthesis and even writing to meet
                        funders’ criteria were automated? Sign up today to start
                        enjoying these benefits!
                    </FeatureText>
                </div>
            </FeatureBox>
        </FeatureWrapper>
    );
};
