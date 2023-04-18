
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/authOperations';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Home } from './components/Dashboard/components/home/Home';
import { SelectFunc } from './components/Dashboard/components/SelectFunc/SelectFunc';
import { Todo } from './components/Dashboard/components/ToDo/Todo';
import { Proposal } from './components/Dashboard/components/proposal/Proposal';
import { ProjectName } from './components/Dashboard/components/projectName/ProjectName';
import { Impact } from './components/Dashboard/components/Impact/Impact';
import { ProjectFunctions } from './components/Dashboard/components/ProjectFunctions/ProjectFunctions';
import { MyProjects } from './components/Dashboard/components/MyProjects/MyProject';
import { SendEmailResetPassword } from './components/Resetpassword/SendEmailResetPassword/SendEmailResetPassword';
import { Main, Signup, Welcome, Terms, Policy, ResetPass } from './pages';
import { SignIn } from './components/SignIn/SignIn';
import { NewPassword } from './components/Resetpassword/NewPassword/NewPassword';
import { SuccessReset } from './components/Resetpassword/SuccessReset/SuccessReset';
import { Efficiency } from 'components/Dashboard/components/Efficiency/Efficiency';
import { CreteriaResponseAI } from 'components/Dashboard/components/CreteriaResponceAI/CretieriaResponceAI';
import { Overall } from 'components/Dashboard/components/Overall/Overal';
import { Advisor } from 'components/Dashboard/components/Advisor/Advisor';
import { SectionA } from 'components/Dashboard/components/SectionA/SectionA';
import { SectionB } from 'components/Dashboard/components/SectionB/SectionB';
import { SectionC } from 'components/Dashboard/components/SectionC/SectionC';
import { SectionD } from 'components/Dashboard/components/SectionD/SectionD';
import { AdvisorResults } from 'components/Dashboard/components/AdvisorResults/AdvisorResults';
import { OverallFinalResults } from 'components/Dashboard/components/OverallFinalResults/OverallFinalResults';

export const App = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);



    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/resetpassword" element={<ResetPass />} />
            <Route path="/checkemail" element={<SendEmailResetPassword />} />
            <Route path="/newpassword" element={<NewPassword />} />
            <Route path="/success" element={<SuccessReset />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />

            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <SignIn />}>
                <Route index element={<Home />} />
                <Route path="create" element={<SelectFunc />}>
                    <Route index element={<ProjectFunctions />} />
                    <Route path="todo" element={<Todo />} />

                    <Route path="/dashboard/create/advisor" element={<Advisor />} />
                    <Route
                        path="/dashboard/create/advisor/:projectname"
                        element={<ProjectName />}
                    />
                    <Route
                        path="/dashboard/create/advisor/results/:projectname"
                        element={<AdvisorResults />}
                    />
                    <Route path="/dashboard/create/proposal" element={<Proposal />} />
                    <Route
                        path="/dashboard/create/proposal/:projectname"
                        element={<ProjectName />}
                    />

                    <Route path="sectionA/:projectname" element={<SectionA />} />
                    <Route path="sectionB/:projectname" element={<SectionB />} />
                    <Route path="sectionC/:projectname" element={<SectionC />} />
                    <Route path="sectionD/:projectname" element={<SectionD />} />

                    <Route path="impact/:projectname" element={<Impact />} />
                    <Route path="impact/:projectname/:criteria" element={<Efficiency />} />
                    <Route
                        path="impact/:projectname/:criteria/response"
                        element={<CreteriaResponseAI />}
                    />
                    <Route path="impact/:projectname/:criteria/overall" element={<Overall />} />
                    <Route
                        path="impact/:projectname/:criteria/overallfinal"
                        element={<OverallFinalResults />}
                    />
                </Route>
                <Route path="myprojects" element={<MyProjects />} />
            </Route>

            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    );
};
