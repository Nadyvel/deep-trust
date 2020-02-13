import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import LeftContainer from './LeftContainer';
import { userUpdateAction } from '../../../store/actions/userActions';