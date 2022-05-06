import styled from 'styled-components/native';

const SafeContainer = styled.SafeAreaView({
  flex: 1,
});

const CenterSafeContainer = styled(SafeContainer)({
  alignItems: 'center',
  justifyContent: 'center',
});

const RowSafeContainer = styled(SafeContainer)({
  flexDirection: 'row',
});

const CenterRowSafeContainer = styled(CenterSafeContainer)({
  flexDirection: 'row',
});

export {
  SafeContainer,
  CenterSafeContainer,
  RowSafeContainer,
  CenterRowSafeContainer,
};
