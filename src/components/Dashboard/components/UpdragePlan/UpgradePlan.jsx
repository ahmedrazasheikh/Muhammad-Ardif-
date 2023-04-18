import { InnerWrapper, Text, NavLink } from './styles/UpgradePlan.styled';
import upgrade from 'images/header/upgrade.svg';
export const UpgradePlan = () => {
    return (
        <div style={{ borderBottom: '1px solid #DDE2E4' }}>
            <div className="dashboard">
                <InnerWrapper>
                    <Text>
                        There’s more! With four new climate finance language models in our Gold Plan
                        you'll be able to procure more funding for your projects faster than ever
                        before. Don’t miss out on an amazing opportunity!{' '}
                    </Text>
                    <NavLink>
                        <img src={upgrade} alt="upgrade" style={{ marginRight: 5 }} />
                        Upgrade now
                    </NavLink>
                </InnerWrapper>
            </div>
        </div>
    );
};
