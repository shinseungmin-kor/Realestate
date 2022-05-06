import styled from 'styled-components/native';

const Container = styled.View({
    flex: 1
})

const CenterContainer = styled(Container)({
    alignItems: 'center', 
    justifyContent: 'center', 
})

const RowContainer = styled(Container)({
    flexDirection: 'row'
})

const CenterRowContainer = styled(CenterContainer)({
    flexDirection: 'row'
})

export {
    Container,
    RowContainer,
    CenterContainer,
    CenterRowContainer,
}