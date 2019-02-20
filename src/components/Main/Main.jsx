import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useContext} from 'react';

import {signInWithGoogle} from '../../clients/firebase';

import styles from './Main.module.css';
import {StateContext} from '../../store';

export default function Main() {
  const state = useContext(StateContext);

  return (
    <div className={styles.container}>
      {
        state.clients.google.ready ?
          (
            <Form>
              <p>Sign in with your Google account to get started:</p>
              <Form.Group>
                <Button onClick={signInWithGoogle}>Log in</Button>
              </Form.Group>
            </Form>
          ) : (
            <div>Loading…</div>
          )
      }
    </div>
  );
}
