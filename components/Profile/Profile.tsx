import { ProfileProps, suggestion } from '../../types'
import {
  ProfileContainer,
  ProfileSuggestionsContainer,
  SuggestionContainer,
  SuggestedProfile,
  LinksContainer,
} from './Profile.module'
import styles from '../../styles/components/Profile/Index.module.css'
function Profile({ avatar, username, name, suggestions }: ProfileProps) {
  return (
    <>
      <SuggestionContainer>
        <ProfileContainer>
          <img src={avatar} alt="avatar" />
          <div className={styles.namesContainer}>
            <span>{name}</span>
            <span>@{username}</span>
          </div>
          <div className={styles.switchButton}>
            <span>Switch</span>
          </div>
        </ProfileContainer>
        {suggestions && (
          <>
            <div>
              <span className={styles.suggestionsForYou}>
                Suggestions For You
              </span>
            </div>
          </>
        )}
        {suggestions
          ? suggestions.map((suggestion: suggestion) => {
              return (
                <ProfileSuggestionsContainer>
                  <SuggestedProfile>
                    <img src={suggestion.avatar} alt="avatar" />
                    <div className={styles.suggestedProfile}>
                      <span className={styles.suggestedProfileName}>
                        {suggestion.name}
                      </span>
                      <span className={styles.suggestedProfileFollowedBy}>
                        {suggestion.followedBy}
                      </span>
                    </div>
                    <div className={styles.followButtonContainer}>
                      <span className={styles.followButton}>Follow</span>
                    </div>
                  </SuggestedProfile>
                </ProfileSuggestionsContainer>
              )
            })
          : null}
        <LinksContainer>
          <a href="#">About</a>
          <a href="#">Press</a>
          <a href="#">Api</a>
          <a href="#">Jobs</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Top Accounts</a>
          <a href="#">Hashtags</a>
          <a href="#">Language</a>
        </LinksContainer>
      </SuggestionContainer>
    </>
  )
}

export default Profile
