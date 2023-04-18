import {
    Wrapper,
    Title,
    Text,
    Advantages,
    AdvantagesText,
} from '../styles/Content.styled';
import aboutUsBtn from 'images/header/aboutUsBtn.svg';

export const Content = () => {
    return (
        <Wrapper>
            <Title>The First of its Kind</Title>
            <Text>
                Climate Finance Copilot is an AI supported web application
                designed to assist project teams seeking financing from the
                Green Climate Fund to write qualitatively superior proposals
                quicker, and with less resources.
            </Text>
            <Advantages style={{ marginBottom: '12px' }}>
                <img
                    src={aboutUsBtn}
                    alt="button"
                    
                    style={{ marginRight: 20 }}
                />
                <AdvantagesText>
                    Easy to use (No special training required!)
                </AdvantagesText>
            </Advantages>
            <Advantages style={{ marginBottom: '12px' }}>
                <img
                    src={aboutUsBtn}
                    alt="button"
                    
                    style={{ marginRight: 20 }}
                />
                <AdvantagesText>
                    Do a lot more research and writing in much less time.
                </AdvantagesText>
            </Advantages>
            <Advantages>
                <img
                    src={aboutUsBtn}
                    alt="button"
                   
                    style={{ marginRight: 20 }}
                />
                <AdvantagesText>
                    Guaranteed to increase your productivity by a factor of ten
                    or more.
                </AdvantagesText>
            </Advantages>
        </Wrapper>
    );
};
