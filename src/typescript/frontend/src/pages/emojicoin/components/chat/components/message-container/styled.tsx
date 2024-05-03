import styled from "styled-components";

export const Arrow = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  right: -5px;
`;

export const StyledMessageInner = styled.div`
  display: flex;
  position: relative;
  padding: 6px;
  border-radius: ${({ theme }) => theme.radii.xSmall};
  margin: 0 7px 11px 7px;
`;

export const StyledMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 11px;
  width: 100%;
  max-width: 65%;
  height: fit-content;
`;

export const StyledUserNameWrapper = styled.div`
  display: flex;
`;

export const StyledMessageContainer = styled.div<{ isIncoming: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ isIncoming }) => (isIncoming ? "start" : "end")};

  ${Arrow} {
    background: ${({ theme, isIncoming }) => (isIncoming ? theme.colors.econiaBlue : theme.colors.blue)};
  }

  ${StyledUserNameWrapper} {
    justify-content: ${({ isIncoming }) => (isIncoming ? "start" : "end")};
  }

  ${StyledMessageInner} {
    background-color: ${({ theme, isIncoming }) => (isIncoming ? theme.colors.econiaBlue : theme.colors.blue)};
  }
`;