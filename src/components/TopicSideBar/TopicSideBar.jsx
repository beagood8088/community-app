import { useQuery } from "react-query";
import { getAllTopics } from "../../api";
import { IconWrapper } from "../Shared/IconWrapper";
import { CheckOn, CheckOff } from "../Shared/SvgIcons";
import { 
  Header, 
  TopicListWrapper, 
  TopicRow, 
  TopicWrapper, 
  Wrapper 
} from "./topic-sidebar.styled"


export const TopicSideBar = (props) => {
  const { data, error, isLoading, isError } = useQuery("topics", getAllTopics);
  
  if (isLoading) {
    return (
      <>...loading</>
    );
  }

  if ( error ) {
    return <span>Error: {error.message}</span>;
  }

  const toggleTopic = (topicId) => {

  }
    
  return (
    <Wrapper>
      <Header>Topics</Header>
      <TopicListWrapper>
        {data.map((topic, index) => (
          <TopicWrapper
            className={topic?.isActive && 'isActive'} 
            onClick={() => toggleTopic(topic?.id)} key={topic?.id || index}
          >
            <TopicRow className="topic-row">
              <label>{topic?.label}</label>
              {topic?.isActive ? 
                <IconWrapper><CheckOn /></IconWrapper>  : <IconWrapper><CheckOff /></IconWrapper>}
            </TopicRow>    
          </TopicWrapper>
        ))}
      </TopicListWrapper>
    </Wrapper>
  )
}