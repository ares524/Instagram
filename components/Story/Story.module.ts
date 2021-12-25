import styled from "@emotion/styled";

export const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid #dbdbdb;
`;

export const StoryTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #dbdbdb;
`;

export const StoryStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dbdbdb;
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: none;
`;

export const StoryStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem 2rem;
`;
export const StoryPopularityStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0rem 2rem;
`;
