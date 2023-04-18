import { useLocation, useParams } from 'react-router-dom';
import { Wrapper, InnerWrapper, Title, PurposeText } from '../styles/SidebarHeader.styled';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const SidebarHeader = () => {
    const { projectname, criteria } = useParams();
    const { suggestions } = useSelector(state => state.projects.gradeProject);

    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('suggestions', JSON.stringify(suggestions));
    }, [suggestions]);

    const storedSuggestions = localStorage.getItem('suggestions');
    const parsedSuggestions = JSON.parse(storedSuggestions);

    if (!suggestions && !parsedSuggestions) {
        return;
    }

    if (
        location.pathname ===
        `/dashboard/create/impact/${projectname}/${criteria}/response`.replaceAll(' ', '%20')
    ) {
        // Use suggestions data to render the sidebar
        const data = suggestions || parsedSuggestions;
        
        return (
            <Wrapper>
                <InnerWrapper>
                    <Title>
                        Here’s What to do to get a <span style={{ fontWeight: 700 }}>HIGH:</span>
                    </Title>
                </InnerWrapper>
                <div>
                    {data.map((item, idx) => (
                        <PurposeText key={idx}>{item}</PurposeText>
                    ))}
                </div>
            </Wrapper>
        );
    }

    if (
        location.pathname ===
        `/dashboard/create/advisor/results/${projectname}`.replaceAll(' ', '%20')
    ) {
        // Use suggestions data to render the sidebar
        // const data = suggestions || parsedSuggestions;

        return (
            <Wrapper>
                <InnerWrapper>
                    <Title>Below is a list of sources referred to in the report: </Title>
                </InnerWrapper>
                <div>
                    <PurposeText>
                        - Intergovernmental Panel on Climate Change (IPCC) Fifth Assessment Report
                        (2014)
                    </PurposeText>
                    <PurposeText>- National climate strategies and studies.</PurposeText>
                    <PurposeText>
                        - The Caribbean Regional Climate Outlook -Forum (CariCOF) and the Caribbean
                        Community Climate Change Centre (CCCCC)
                    </PurposeText>
                    <PurposeText>
                        - Vulnerability studies, such as the Caribbean Assessment of Regional
                        Drought (CARiDRO) and the Caribbean Risk Information System (CRIS)
                    </PurposeText>
                    <InnerWrapper>
                        <Title>Other Sources To Consider:</Title>
                    </InnerWrapper>
                </div>
            </Wrapper>
        );
    }
};
