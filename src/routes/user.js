import { Router } from 'express';
import { getApp } from 'firebase-admin/app';
import { Firebase } from '../firebase';


const router = Router();

router.get('/', (req, res) => {
  const listAllUsers = (nextPageToken) => {
    // List batch of users, 1000 at a time.
    Firebase()
      .listUsers(1000, nextPageToken)
      .then((listUsersResult) => {
        listUsersResult.users.forEach((userRecord) => {
          console.log('user', userRecord.toJSON());
        });
        if (listUsersResult.pageToken) {
          // List next batch of users.
          listAllUsers(listUsersResult.pageToken);
        }
      })
      .catch((error) => {
        console.log('Error listing users:', error);
      });
  };
  // Start listing users from the beginning, 1000 at a time.
  listAllUsers();
  
  return res.send(Object.values(req.context.models.users));
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

export default router;
