import React, { useContext, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Button } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  CardInfo,
  ActiveTaskCard,
  Info,
  Section,
  Container,
  Icon,
  LeaveButton,
  VerifyButton,
} from "./card.component.styles";

export const ActiveTasksInfoCard = ({
  data = {},
  getStudentsInClass,
  leaveClass,
  navigation,
  getVerifiedStatus,
}) => {
  const [noOfStudents, setNoOfStudents] = useState(0);
  const [verifiedStatus, setVerifiedStatus] = useState(false);

  const {
    className,
    classCode,
    classMaker,
    classMakerUID,
    id,
    name,
    regNo,
    stdClassName,
    stdClassCode,
    stdClassMaker,
    verified,
  } = data;

  // console.log(data);

  useEffect(() => {
    if (className) {
      getStudentsInClass(classCode, setNoOfStudents);
    }
  }, [noOfStudents]);

  useEffect(() => {
    if (stdClassName) {
      getVerifiedStatus(stdClassCode, setVerifiedStatus);
    }
  }, [verifiedStatus]);

  return (
    <>
      <ActiveTaskCard>
        {className && (
          <>
            <Info>
              <Text variant="body">{"Created Class:"}</Text>
            </Info>
            <Section>
              <Spacer position="bottom" size="medium">
                <Text variant="label">{"Class Name: " + className}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">{"Class Code: " + classCode}</Text>
              </Spacer>
              <Text variant="label">
                {"Number of Students: " + noOfStudents}
              </Text>
              <Spacer position="bottom" size="medium" />
            </Section>
          </>
        )}
        {stdClassName && (
          <>
            <Info>
              <Text variant="body">{"Joined Class:"}</Text>
            </Info>
            <Section>
              <Spacer position="bottom" size="medium">
                <Text variant="label">{"Class Name: " + stdClassName}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">{"Class Code: " + stdClassCode}</Text>
              </Spacer>
              <Spacer position="bottom" size="medium">
                <Text variant="label">{"Class Maker: " + stdClassMaker}</Text>
              </Spacer>
              <Text variant="label">
                Verified: {verifiedStatus ? "Yes" : "No"}
              </Text>
              <Spacer position="bottom" size="medium" />
            </Section>

            <VerifyButton
              icon="face-recognition"
              mode="contained"
              onPress={() =>
                navigation.navigate("ClassJoinedCameraScreen", { stdClassCode })
              }
            >
              Verify
            </VerifyButton>
            <LeaveButton
              icon="account-arrow-left-outline"
              mode="contained"
              onPress={() => {
                leaveClass(stdClassCode);
              }}
            >
              Leave
            </LeaveButton>
          </>
        )}
      </ActiveTaskCard>
    </>
  );
};
