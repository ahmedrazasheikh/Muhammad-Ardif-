import { Layout } from './Layout';

export const Verification = ({ userData, verificationCode, btnIndex }) => {
    return (
        <Layout
            userData={userData}
            verificationCode={verificationCode}
            btnIndex={btnIndex}
        />
    );
};
