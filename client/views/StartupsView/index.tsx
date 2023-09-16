import StartupsLogin from "@/components/StartupsLogin";
import {
  Span,
  StartupsContainer,
  StartupsWrapper,
  Heading,
  FormContainer,
  ContentWrapper,
  FormWrapper,
} from "@/styles/views/StartupsStyles";

export default function StartupsView() {
  return (
    <StartupsContainer>
      <StartupsWrapper>
        <Heading>
          Join the
          <br /> <Span>ACADEMY OF STARTUPS</Span>
          <br /> for Unparalleled Growth and Networking
        </Heading>
        <FormContainer>
          {/* <ContentWrapper>
            <h1>
              If you need any kind of services from our end contact us through
              this number
            </h1>
          </ContentWrapper> */}
          <FormWrapper>
            <StartupsLogin />
          </FormWrapper>
        </FormContainer>
      </StartupsWrapper>
    </StartupsContainer>
  );
}
