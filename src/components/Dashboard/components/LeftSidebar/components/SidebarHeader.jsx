import { useLocation, useParams } from 'react-router-dom';
import close from 'images/header/close.svg';
import {
    Wrapper,
    InnerWrapper,
    Title,
    Img,
    PurposeText,
    Important,
    ImportantText,
} from '../styles/SidebarHeader.styled';
import important from 'images/header/important.svg';

export const SidebarHeader = ({ setIsLeftSidebarShown }) => {
    const { projectname, criteria } = useParams();

    const location = useLocation();
    if (location.pathname === `/dashboard/create/impact/${projectname}`.replaceAll(' ', '%20')) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Guidance</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText style={{ marginBottom: 15 }}>
                            You can start the grading process with any of the six criteria
                            indicated.
                        </PurposeText>
                        <PurposeText>
                            You’ll be able to save your input at any point and return later to
                            complete the grading process.
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }
    if (
        location.pathname ===
        `/dashboard/create/impact/${projectname}/${criteria}`.replaceAll(' ', '%20')
    ) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Guidance</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText style={{ marginBottom: 15 }}>
                            For this section, the goal is to ensure that the proposed project or
                            programme demonstrates Financial Viability in the Long Run sub-criteria
                            and provides evidence of commitment by a specific source of capital
                            funding to replace GCF capital.
                        </PurposeText>
                        <Important>
                            <img src={important} alt="important" style={{ marginRight: 8 }} />
                            <ImportantText>Important</ImportantText>
                        </Important>
                        <PurposeText>
                            Be sure that your input stays below the word count limit indicated. This
                            word count limit is set by the GCF. 
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }
    if (
        location.pathname ===
        `/dashboard/create/impact/${projectname}/${criteria}/response`.replaceAll(' ', '%20')
    ) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Your Score</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            The score generated is based on how well your narrative measured up to
                            the GCF indicators for the Financial Viability in the Long Run
                            sub-criteria. 
                        </PurposeText>
                        <PurposeText>
                            You can improve your score by applying the recommendations provided on
                            the right side of the screen.
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }
    if (
        location.pathname ===
        `/dashboard/create/impact/${projectname}/${criteria}/overall`.replaceAll(' ', '%20')
    ) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Understanding your Overall score</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            This overall score is an average of scores the you received for each
                            indicator for the Financial Viability in the Long Run sub-criteria.  
                        </PurposeText>
                        <PurposeText>
                            You can improve your score by improving your entries based on the
                            recommendations previously provided.
                        </PurposeText>
                        <Important>
                            <img src={important} alt="important" style={{ marginRight: 8 }} />
                            <ImportantText>Important</ImportantText>
                        </Important>
                        <PurposeText>
                            If you select to redo your initial entry all scores generated for this
                            criterion will be deleted. 
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }

    if (location.pathname === `/dashboard/create/sectionA/${projectname}`.replaceAll(' ', '%20')) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Guidance</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            To increase chances of success, ​your ​project proposals ​must include
                            clear explanations of how the proposed activities are climate related. 
                        </PurposeText>
                        <PurposeText>
                            The climate rationale should also describe what would occur in the
                            absence of the project and justify why the project proponent decided to
                            pursue the specific activities in the proposal.
                        </PurposeText>
                        <PurposeText>
                            The ​climate rationale ​portion of the ​GCF proposal​ is arguably the
                            most important section ​and Climate Finance Co-pilot will help to ensure
                            that you explain, as clearly as possible, the climate impacts or risks
                            that th​at your intervention is aiming to mitigate. ​
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }

    if (location.pathname === `/dashboard/create/sectionB/${projectname}`.replaceAll(' ', '%20')) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Quick Tips</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            To increase chances of success, ​your ​project proposals ​must include
                            clear explanations of how the proposed activities are climate related. 
                        </PurposeText>
                        <PurposeText>
                            The climate rationale should also describe what would occur in the
                            absence of the project and justify why the project proponent decided to
                            pursue the specific activities in the proposal.
                        </PurposeText>
                        <PurposeText>
                            ​The ​climate rationale ​portion of the ​GCF proposal​ is arguably the
                            most important section ​and Climate Finance Co-pilot will help to ensure
                            that you explain, as clearly as possible, the climate impacts or risks
                            that th​at your intervention is aiming to mitigate. ​
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }

    if (location.pathname === `/dashboard/create/sectionC/${projectname}`.replaceAll(' ', '%20')) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Quick Tips</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            To increase chances of success, ​your ​project proposals ​must include
                            clear explanations of how the proposed activities are climate related. 
                        </PurposeText>
                        <PurposeText>
                            The climate rationale should also describe what would occur in the
                            absence of the project and justify why the project proponent decided to
                            pursue the specific activities in the proposal.
                        </PurposeText>
                        <PurposeText>
                            ​The ​climate rationale ​portion of the ​GCF proposal​ is arguably the
                            most important section ​and Climate Finance Co-pilot will help to ensure
                            that you explain, as clearly as possible, the climate impacts or risks
                            that th​at your intervention is aiming to mitigate. ​
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }

    if (location.pathname === `/dashboard/create/sectionD/${projectname}`.replaceAll(' ', '%20')) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Quick Tips</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            To increase chances of success, ​your ​project proposals ​must include
                            clear explanations of how the proposed activities are climate related. 
                        </PurposeText>
                        <PurposeText>
                            The climate rationale should also describe what would occur in the
                            absence of the project and justify why the project proponent decided to
                            pursue the specific activities in the proposal.
                        </PurposeText>
                        <PurposeText>
                            ​The ​climate rationale ​portion of the ​GCF proposal​ is arguably the
                            most important section ​and Climate Finance Co-pilot will help to ensure
                            that you explain, as clearly as possible, the climate impacts or risks
                            that th​at your intervention is aiming to mitigate. ​
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }

    if (
        location.pathname ===
        `/dashboard/create/advisor/results/${projectname}`.replaceAll(' ', '%20')
    ) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Quick Tips</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            To increase chances of success, ​your ​project proposals ​must include
                            clear explanations of how the proposed activities are climate related. 
                        </PurposeText>
                        <PurposeText>
                            The climate rationale should also describe what would occur in the
                            absence of the project and justify why the project proponent decided to
                            pursue the specific activities in the proposal.
                        </PurposeText>
                        <PurposeText>
                            ​The ​climate rationale ​portion of the ​GCF proposal​ is arguably the
                            most important section ​and Climate Finance Co-pilot will help to ensure
                            that you explain, as clearly as possible, the climate impacts or risks
                            that th​at your intervention is aiming to mitigate. ​
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }

    if (
        location.pathname ===
        `/dashboard/create/impact/${projectname}/${criteria}/overallfinal`.replaceAll(' ', '%20')
    ) {
        return (
            <>
                <Wrapper>
                    <InnerWrapper>
                        <Title>Quick Tips</Title>
                        <Img
                            src={close}
                            alt="close"
                            className="close"
                            onClick={() => setIsLeftSidebarShown(false)}
                        />
                    </InnerWrapper>
                    <div>
                        <PurposeText>
                            To increase chances of success, ​your ​project proposals ​must include
                            clear explanations of how the proposed activities are climate related. 
                        </PurposeText>
                        <PurposeText>
                            The climate rationale should also describe what would occur in the
                            absence of the project and justify why the project proponent decided to
                            pursue the specific activities in the proposal.
                        </PurposeText>
                        <PurposeText>
                            ​The ​climate rationale ​portion of the ​GCF proposal​ is arguably the
                            most important section ​and Climate Finance Co-pilot will help to ensure
                            that you explain, as clearly as possible, the climate impacts or risks
                            that th​at your intervention is aiming to mitigate. ​
                        </PurposeText>
                    </div>
                </Wrapper>
            </>
        );
    }
};
